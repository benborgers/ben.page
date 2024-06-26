---
title: How to use the weather.gov API
date: 2021-06-19
unlisted: true
---

The National Weather Service has a really solid free weather API for the United States that you can use.

Forecasts are divided into grids, and you can query the forecast for a given grid cell. You probably don't know that grid cell's identifier though, so we can make another API request first using coordinates.

If you don't have the coordinates of the location you'd like weather from, one easy way is to find it on [Google Maps](https://google.com/maps), right click, and then click the coordinates to copy them.

First, make a GET request to this URL with the coordinates:

```
https://api.weather.gov/points/{latitude},{longitude}
```

For example:

```
https://api.weather.gov/points/40.7484,-73.9856
```

The JSON response contains a URL at `properties.forecast` which is the URL that will give you the forecast for that location. In this case, that URL is:

```
https://api.weather.gov/gridpoints/OKX/33,36/forecast
```

You'll notice that this URL includes the National Weather Service office code for this location (`OKX`), grid x-coordinate (`33`), and grid y-coordinate (`36`).

If you make a request to this forecast URL, the `properties.periods` array will contain the weather forecast!
