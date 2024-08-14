FROM node:lts-alpine3.18 AS building
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build

FROM node:lts-slim
WORKDIR /app
ARG UM=""
ARG PM=""
ARG UriM=""
COPY --from=building /app/build ./
COPY --from=building /app/src/config/swagger/swaggerPROD.yaml ./src/config/swagger/swaggerPROD.yaml
COPY --from=building /app/package.json ./package.json
ENV NODE_ENV=production
ENV PORT=5000
ENV USER_MONGO=${UM}
ENV PASS_MONGO=${PM}
ENV MONGO_URI=${UriM}
ENV APPLICATION_NAME=Compartir\ ideas 
ENV JWT_SECRET=myStrongSecret
ENV CACHE_KEY=myStrongkey
ENV SWAGGER_DOC=swaggerPROD
RUN npm install --prod
EXPOSE 5000
ENTRYPOINT ["node", "index.js"]

# oobe\bypassnro
# ipconfig /release