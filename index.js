exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Hello world nodejs file1 '),
   };
   return response;
};
