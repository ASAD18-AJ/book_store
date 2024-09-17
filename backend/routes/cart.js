const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth")

//put book to cart
// router.put("/add-to-cart",authenticateToken, async (req,res)=>{
//     try {
//         const { bookid,id } = req.headers;
//         const userData = await User.findById(id);
//         const isBookinCart = userData.cart.includes(bookid);
//         if(isBookinCart){
//             return res.json({
//                 status:"Success",
//                 message:"Book is already in cart",
//             });
//         }
//         await User.findByIdAndUpdate(id,{
//             $push:{cart:bookid},
//         });
//         return res.json({
//             status:"Success",
//             message:"Book added to cart",
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message:"An error occured"});

//     }
// })
router.put("/add-book-to-favourite",authenticateToken, async (req,res) =>{
    try {
        const {bookid,id} = req.headers
        const userData = await User.findById(id);
        const isBookinCart = userData.favourites.includes(bookid);
        if(isBookinCart){
            return res.json({
                status:"Success",
                message:"Book is already in cart"})
        }
        await User.findByIdAndUpdate(id, {$push:{cart:bookid}})
        return res.json({
            status:"Success",
            message:"Book added to cart"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"An error occurred"})
    }
})

module.exports = router;