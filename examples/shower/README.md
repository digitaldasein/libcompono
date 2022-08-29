# compono example for shower framework

## Quick start

### Prerequisites

Build the `compono` library (if not yet done):

```
yarn build:compono:prod
```


Download/update and build the shower core (with latest version):

```sh
git submodule update --init --recursive
git submodule update --init --recursive --remote --merge
cd lib/shower/core \
  && yarn install \
  && yarn build
```

##
