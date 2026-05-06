import Todo from "../models/todo.modal.js";

// CREATE TODO   Post api
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // validation
    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

//  Get all todo api -> pagination sorting searching all get me he lekhten hee
  export const getTodos = async(req,res)=>{
       try{
            // query param
            const {search , sort , page=1 , limit=10}=req.query;

            // base query
            let query ={}

            // search by tittle
            if(search){
              query.title ={ $regex: search, $options: 'i'}; // i for case insensitive
            }
             // sorting
             let sortOption ={}
             if(sort === "asc") sortOption.createAt=1 //1 for assending
             else sortOption.createAt=-1 // -1 is desending order defult

             // pagination
             const skip =(page-1)*limit;
             const todos=await Todo.find(query)
             .sort(sortOption)
             .skip(skip)
             .limit(parseInt(limit));

             const totalTodos = await Todo.countDocuments(query);
             return res.status(200).json({
              success:true,
              message:"Todos fetched successfully",
              total:totalTodos,
              page:Number(page),
              limit:Number(limit),
              data:todos
             })

       }catch(error){
        return res.status(500).json({
          success:false,
          message:" internal server error",
          error:error.message,
        })
       }
  }