const fs = require("fs");

const crud = {
  products: JSON.parse(fs.readFileSync('./db.json', {encoding: 'utf-8'})),
  create({id, nome}){
    const dados = {id, nome};
    crud.products.push(dados);
    fs.writeFileSync('./db.json', JSON.stringify(crud.products), {encoding: 'utf-8'});
    console.log("Produto criado com sucesso!")
  },
  read() {
    crud.products = JSON.parse(fs.readFileSync('./db.json', {encoding: 'utf-8'}));
    return crud.products;
  },
  update({id, nome}){
    for(let i=0; i < crud.products.length; i++){
      if(crud.products[i].id === id){
        crud.products[i].nome = nome;
        fs.writeFileSync('./db.json', JSON.stringify(crud.products), {encoding: 'utf-8'});
        console.log("Produto Atualizado com sucesso!");
      }
    }
  },
  delete({id}){
    for(let i=0; i < crud.products.length; i++){
      if(crud.products[i].id === id){
        crud.products.splice(i, 1);
        fs.writeFileSync('./db.json', JSON.stringify(crud.products), {encoding: 'utf-8'});
        console.log("Produto deletado com sucesso!");
      }
    }
  }
}

// Create
crud.create({id: 3223, nome: 'mesa'});

// Read
console.log(crud.read())

// Update
crud.update({id: 123, nome: 'Caderno'});

// Delete
crud.delete({id: 4567});