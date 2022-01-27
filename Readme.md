<h4 align="center">
<img src="https://github.com/JFToro192/SIMILE-WQP-webGIS/blob/master/ol-project/src/assets/img/assev_simile.png?raw=true" width="150" alt="SIMILE">
</h4>

# SIMILE - WQP lakes monitoring

The WebGIS app is being developed under the framework of the 
[interreg project SIMILE](https://progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe)
to visualize the Water Quality Parameter (WQP) Maps products. 

The project aims to improve the actual insubric lakes monitoring system and to create a shared policy for water management
through an advanced informative system and citizen participation. The project is funded under the Interreg Italy-Switzerland Cooperation
Program in order to develop strategies for the protection of lakes.

## Development setup

The node application is written using:
- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [OpenLayers](https://openlayers.org/)

### WebGIS app

To develop the Vue webGIS app locally, found in the  `./ol-project` directory, is required having installed Node.js.

Then, you can proceed to install the project dependencies by executing the command:

```shell
npm i
```
For running the app localy using, launch the command:

```shell
npm run start
```

### Build Docker 

Once the changes have been applied to the Vue app proceed to build the static files for the website from the `./ol-project` directory:

```shell
npm run build
```
The static files will be compiled into the `./server/public` folder.

Once the changes have been applied to the public directory, recreate the dependencies for the server configuration from the root directory `./`:

```shell
npm i
```
Run the docker composition for development:
```shell
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
Run the docker composition for production:
```shell
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

<!-- ## Contributions

Developed by [Juan Fernando Toro](mailto:juanfernando.toro@polimi.it) - [GitHub](https://github.com/JFToro192)

A special thanks to the project partners:

- Politecnico di Milano
- Scuola universitaria professionale della Svizzera italiana
- Regione Lombardia
- CNR IRSA
- Fondazione Politecnico di Milano
- Cantone Ticino -->


<!-- ## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/) © [SIMILE Project](mailto:interreg-simile@polimi.it) -->