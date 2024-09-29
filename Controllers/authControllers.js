// Always create class because it's easier to call methods by class

class AuthController{
    static test= async (req, res)=>{
        try {
            return res
                    .status(200)
                    .json({Message:"Welcome to MERN Practice"})
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }

    static home = async (req, res)=>{
        try {
            return res
                    .status(200)
                    .json({Message:"Welcome to the home Page"})
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }

    static aboutUs = async (req, res)=>{
        try {
            return res 
                    .status(200)
                    .json({Message:"This is all about us."})
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }

    static register = async (req, res)=>{
        try {
            const data= req.body;  // for getting data from body
            return res 
                    .status(200)
                    .json(data)
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }
}

export default AuthController;