[![CC BY 4.0][cc-by-shield]][cc-by]
[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# Kick it like Chirikov

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable illustrates the dynamics of the [**Standard Map**](https://en.wikipedia.org/wiki/Standard_map). In non-linear dynamics this is one of the most famous discrete time, two-dimensional maps. It's also known as the **kicked-rotator** or **Chirikov map**.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**“Kick it like Chirikov” - The kicked rotator (standard map)**](https://www.complexity-explorables.org/explorables/kick-it-like-chirikov/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/kick_it_like_chirikov"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		kick_it_like_chirikov.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `kick_it_like_chirikov.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an agument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/kick_it_like_chirikov.git
```


Go to the directory, install, build and show using `npm`:

1. `cd kick_it_like_chirikov`
2. `npm install`
3. `npm run build`
4. `npm run show`

--- 

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

