---
title: Giving Out Chick-fil-A on a Schedule App
date: 2022-02-28
unlisted: false
bestOf: true
---

In November of senior year, I added a Chick-fil-A tab to _Blocks_, the schedule app I [built for my high school](https://benborgers.com/posts/blocks). Here’s how that came to be.

In the year above me at Lexington High School we had Samuel Jefferson Andrews, who had amassed [2 million TikTok followers](https://www.tiktok.com/@samueljeffersonandrews). My understanding is that, during my junior year, the Chick-fil-A in Waltham ran a competition on Instagram where you could win free Chick-fil-A sandwiches for your entire school. You commented your school’s name, and if you got your classmates to give you the most likes, your school would win.

Samuel Jefferson Andrews turned his TikTok audience towards his comment, and won the competition for us. But when the cards were delivered a couple months later, Covid had closed down school. Several thousand gift cards sat inside the school over the summer.

Then, in the fall of my senior year, the school’s social worker gave the gift cards to the former junior class president. I think it was some vague plot to have someone distribute them; at the very least, the social worker got the responsibility of distributing them off of her hands.

But not much happened, except that my friends and I got in touch with the junior class president and treated ourselves to many free Chick-fil-A sandwiches.

Then, around Thanksgiving, I realized that I could use Blocks to distribute the cards! I messaged her and asked if I could take 400 cards off her hands, and purchased hundreds of envelopes to package them:

<video src="/posts/blocks-chick-fil-a/blocks-chick-fil-a.mp4" controls playsinline></video>

I then built a wheel that you could spin in order to win two Chick-fil-A gift cards (I packaged 200 packs of two cards each), and put it in a secondary tab of the app. You could spin once per hour.

![](/posts/blocks-chick-fil-a/IMG_8841_Original.jpeg)

Screenshots from Trisha, who was the first winner and won two times. I was too dumb to remember to take screenshots of my own app.

## The Results

People went crazy over this. People would wake up in the middle of the night, remember that the Chick-fil-A giveaway was happening, and spin the wheel before falling back asleep.

In the end, people spun this wheel _29,000 times_ over the four days it took for these cards all to run out. Of those, only 200 were winning spins. A lot of people got frustrated.

![](/posts/blocks-chick-fil-a/IMG_8840_Original.jpeg)

## I’m a Bad Person

In the screenshots above, you can see a faint red dot above the “gift” icon at the bottom.

That’s a pinging red dot animation I added whenever you had the opportunity to spin the wheel. The only way to make that pinging dot go away was to do your spin for the hour. People would spin just to make the dot go away.

Probably not the best thing, but kinda fun. But it seems like something Facebook would do. Oops.

## A “Random” Algorithm for Picking Winners

Since the giveaway is in the distant past, I can publicly reveal the algorithm for selecting winners for the first time ever.

![](/posts/blocks-chick-fil-a/image-20.png)

Primary source records from the `blocks-v2` codebase.

How this code works:

- First, we check if the user is allowed to spin (whether they’ve used up their spin for this hour).
- Then, we find what the latest winning spin by anyone was.
- We calculate a “cooldown period” (in minutes). The cooldown period is, on average, less for upperclassmen. This is because I’m a bad person and wanted to favor upperclassmen, being a senior myself.
- The user wins if it’s been more than {cooldown} minutes since the last win. If they win, we generate a random place within the red (“winning”) slice of the spinner (-9º to 9º) to stop the spinner at.
- Otherwise, they’ve lost. We stop the spinner anywhere between 11º and 349º.

You’ll notice that this is a random algorithm, but not random in the way that you’d assume. There are no set odds of winning per spin.

Instead, this algorithm produces a win every 20-45 minutes, and once one winner has been chosen, no one else can win for at least 20 minutes.

I did it this way because I wasn’t sure how many people would play, so I didn’t know how to set the probabilities. So instead, it seemed reasonable to limit the _pace_ of winners to 1-2 per hour.

_A side effect of this method is that you have much better chances of winning if you play while everybody else is asleep and not playing. But people didn’t know how the algorithm worked, so they didn’t know that._

## Making the Deliveries

You see how the app asked for people’s addresses? That’s not because I shipped them their prizes. I decided to be frugal, and _hand-delivered the envelopes to every winner in Lexington_.

For that week, I made 200 deliveries to separate houses. There were days when I woke up at 5am to make deliveries before school, and then after school would package up the winners that had popped up while I was at school and deliver those too.

On the peak day, I drove and delivered to 80 different people’s houses in town.

It was extremely overwhelming (while also trying to keep up with normal school alongside), but it was also _super_ fun.

I got to see parts of Lexington that I’d never seen before. I got into the zone of making deliveries as fast as possible. And I used an app that optimized my route, so the stops were usually just a couple minutes apart.

After the week was over, I had a moment to relax. Nothing major had gone wrong. People had their brief fun, and it ended before things got stale. And best of all, people got their free chicken sandwiches.

_Okay, I understand that Chick-fil-A is a morally questionable organization because they donate to anti-LGBTQ organizations. But by distributing these gift cards, I was taking money_ **_away_** _from Chick-fil-A. I would rather see myself as the Robinhood of chicken sandwiches._
