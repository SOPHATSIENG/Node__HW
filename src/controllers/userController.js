
class UserProducts {
     getAll( req, res){
        res.send(`Lists products all....`)
    }
    getbyID(req, res){
        const id = req.params.id;
        res.send(`Product ID ${id} in list`)
    }
    createproduct(req, res){
        res.send(`Product was create new`)
    }
    updateproduct(req, res){
        const id = req.params.id;
        res.send(`Products ID ${id} was update`);
    }
    destoy(req, res){
        const id = req.params.id;
        res.send(`Product was delete....`)
    }
}

export default UserProducts;