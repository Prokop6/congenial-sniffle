FROM node:alpine

USER 1000

COPY ./ ./

CMD ["parcel", "run serve"]

EXPOSE 8080/tcp