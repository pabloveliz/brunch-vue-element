# Brunch skeleton for Vue + Element

A _barebones_ Brunch skeleton for [Vue.js](https://vuejs.org/) and [Element](http://element.eleme.io/) combined.

This [brunch-vue-element](https://github.com/pabloveliz/brunch-vue-element) is based on two skeletons already avalible on github: [brunch-vue-barebones](https://github.com/tomquirk/brunch-vue-barebones) and [element-starter](https://github.com/ElementUI/element-starter) but removed vue-router and added uglify for the production building.

Thanks to this [article](https://vuejsdevelopers.com/2017/08/20/vue-js-brunch/) that put me on the track.

## Installation

1. Install Brunch globally

```bash
npm install -g brunch
```

2. Create a new Brunch project using _this_ skeleton

```bash
brunch new -s vue-element
```

### Manual Install

You can clone this repo manually or download the zip and extract it.

## Getting Started

### Traditional way

follow brunch instructions:

```bash
npm install
brunch watch -s
```

and for deployment

```bash
brunch build --production
```

### Using Docker

1. Create a small [nodejs]() image, let's call it *vue_element*

```bash
docker build -t vue_element .
```

2. Start a container for development

```bash
docker run -it --rm -v "$PWD":"$PWD" -w "$PWD" -u "$(id -u)" vue_element
```

3. When you are ready for deployment

```bash
docker run -it --rm -v "$PWD":"$PWD" -w "$PWD" -u "$(id -u)" vue_element npm run build
```

All your files will be in */public*
