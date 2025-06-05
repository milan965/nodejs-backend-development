const productPage = (req,res) => {
    return res.render('admin/products/product');
}

const addProductPage = (req,res) => {
    return res.render('admin/products/add_product');
}


module.exports = {
    productPage,addProductPage
}