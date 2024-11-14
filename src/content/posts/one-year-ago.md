---
title: One Year Ago Email
date: 2022-07-03
---

Every morning, I get an email from a bot that I created. The bot sends me links to my journal entries in past years.

![](/posts/one-year-ago/177016581-16d54d2e-0575-42b4-a230-a25b00b85d0f.png)

When I check my email first thing in the morning, these are some of the first things I read. They’re pretty short, and it feels good to get them out of the way.

I built this email because I really enjoyed reading my past journal entries and uncovering memories I’d forgotten about, but I realized that I was never going to read them all.

So instead, I decided that I could read them all back one at a time, so eventually I’d get through them all. It’s a really nice way to reflect on what’s changed in a year’s time and what hasn’t. I guess it’s kind of like [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition) for my life.

As a bonus, I’ll attach the code that I wrote to make this work. It’s part of a [Laravel](https://laravel.com) app, so it’s written as a job in Laravel that’s scheduled for every morning at 6am.

## The code, if you’re interested:

```php
<?php

namespace App\Jobs;

use Carbon\Carbon;
use FiveamCode\LaravelNotionApi\Query\Filters\Filter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class SunriseMemory implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function handle()
    {
        $start = new Carbon('2019-12-01');
        $date = now()->subYear()->timezone('America/New_York');

        $entries = [];

        while ($date->gt($start)) {
            // Only passing the date (without time) to the "equals" filter for all day
            // (per https://developers.notion.com/reference/post-database-query#date-filter-condition).
            $filters = collect([
                Filter::rawFilter('Date', ['date' => ['equals' => $date->format('Y-m-d')]]),
            ]);

            $entry = \Notion::database('b37090dcd7164837b461dd17afa01034')
                ->filterBy($filters)
                ->query()
                ->asCollection()
                ->first();

            if ($entry) {
                $entries[] = $entry;
            }

            $date->subYear();
        }

        $firstEntryDate = $entries[0]->getProperty('Date')->getContent()->getStart();
        $firstEntryDateCarbon = new Carbon($firstEntryDate);
        $ageOfFirstEntry = $firstEntryDateCarbon->diffInYears();
        $ageOfFirstEntryWord = ucfirst(
            (new \NumberFormatter('en', \NumberFormatter::SPELLOUT))
                ->format($ageOfFirstEntry)
        );
        $years = $ageOfFirstEntry === 1 ? 'year' : 'years';

        $firstEntryTitle = $entries[0]->getTitle();

        $subject = "$ageOfFirstEntryWord $years ago: $firstEntryTitle";

        $body = '';

        foreach ($entries as $entry) {
            $title = $entry->getTitle();
            $entryDate = $entry->getProperty('Date')->getContent()->getStart()->format('l, F jS, Y');
            $entryId = Str::replace('-', '', $entry->getId());

            $body .= "$title ($entryDate): https://notion.so/$entryId";
            $body .= "\n\n";
        }

        Mail::raw($body, function ($message) use ($subject) {
            $message->from('sunrise@friede.gg', 'Sunrise');
            $message->to('ben@elk.sh');
            $message->subject($subject);
        });
    }
}
```
