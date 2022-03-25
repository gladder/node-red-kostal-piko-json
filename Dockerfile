FROM nodered/node-red:latest

USER root
COPY . /gladder/kostal-piko-json/
RUN chmod -R 777 /gladder/kostal-piko-json/
RUN chown -R node-red.root /gladder/kostal-piko-json/
USER node-red
RUN npm install /gladder/kostal-piko-json/
