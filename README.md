# Molecules App

This app uses Django rest framework and ReactJS with the [Material UI library](https://mui.com) to sketch an interface utilizing 
material components. Finally, the [RDKit library](https://github.com/MichelML/rdkit-js) is used to build molecules images.

### About Endpoints

- Get Molecules: `http://localhost:8000/molecule`
- Get Activities by Molecule: `http://localhost:8000/molecule/<id_molecule>/activity`
- Get detailed Molecule: `http://localhost:8000/molecule/<id_molecule>`

### About pagination
The endpoints to get molecules and their activities have been paginated using two optional attributes: `page_size` and 
`page_number`, their default values are `1` and `10` respectively. The above functionality allows us to have more 
flexibility and comfort, for instance:

- `http://localhost:8000/molecule?page_number=2&page_size=5` gets 5 results for page 2.

### About Frontend

It was utilized _material_ components to sketch the interface. The following are application's screenshots:

#### List Molecules

![molecules.png](readme_images/molecules.png)

#### List Activities by Molecule

![activities.png](readme_images/activities.png)

#### Detailed molecule
![detailed_molecule.png](readme_images/detailed_molecule.png)


#### All together
![all_together.gif](readme_images/all_together.gif)


### How to run the application?
- Open a new terminal and run `docker-compose up`. This command will create two containers: `molecules_frontend` 
and `molecules_backend`.
- Once the command has finished, open the browser and go to `http://localhost:3000`

Finally, I have used Docker version 20.10.6, docker-compose version 1.29.1, and Windows 10 to test the deployment process.

