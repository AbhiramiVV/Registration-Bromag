import multer from 'multer';




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/Images/')
    },
    filename: function (req, file, cb) {
      console.log('gggggg');
      const uniqueSuffix = Date.now() 
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  
  })
 
let upload=multer({
    storage: storage
})

const multipleUpload = upload.fields([{ name: 'main_image', maxCount: 3},{ name: 'sub_image', maxCount: 3 }])




export default multipleUpload
