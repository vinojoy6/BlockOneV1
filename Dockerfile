FROM node:12-alpine
LABEL maintainer="BlockOne cucumber api test suite"

WORKDIR /home

RUN touch package.json
RUN echo '{}' > package.json

RUN npm install --save-dev @types/react
RUN  npm install --save-dev @cucumber/cucumber
RUN  npm install --save-dev pactum


