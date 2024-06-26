---
title: "How to list DNS records using the Route53 Node.js API"
date: 2020-12-30
unlisted: true
---

Recently, I had a project where I wanted to programmatically get all the DNS records for my domain. The DNS was being handled on AWS Route53.

First, I created an IAM User for my code to use (it's AWS' version of an API key):

1. Open the the [IAM Users](https://console.aws.amazon.com/iam/home#/users) page in the AWS dashboard.
2. Click "Add User", give it a name, and select "programmatic access".
3. Select "Attach existing policies directly" and search for `AmazonRoute53ReadOnlyAccess`. This means that this key will only be able to _read_ Route53 resources, not modify them or access anything else.
4. Go through the rest of the setup steps and note the access key ID and secret access keys generated at the end.

In your project, create a JSON file (I called mine `aws.json`) with your keys in it:

```json
{
  "accessKeyId": "AKIA5POZ6AJXFCGJPE4H",
  "secretAccessKey": "n1YrVagQ8/Cz3nwLMoiK4OlSudzbKFCbVzMRZhjI",
  "region": "us-east-1"
}
```

Next, open up your [Hosted zones](https://console.aws.amazon.com/route53/v2/hostedzones#) on Route53 and open the domain whose DNS records you want to read. Copy down the ID at the end of the URL bar — it'll probably start with a `Z`.

Now, you're ready to use the AWS API:

```javascript
const AWS = require("aws-sdk");

AWS.config.loadFromPath("./aws.json"); // your JSON file with access keys
const route53 = new AWS.Route53();

route53.listResourceRecordSets(
  {
    HostedZoneId: "Z...", // hosted zone ID from earlier
    MaxItems: "300",
  },
  (err, data) => {
    console.log(data);
  }
);
```

And that's it! You can look at the logged `data` variable to see the DNS records for this domain.
