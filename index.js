exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Hello world nodejs updated file2 '),
   };
   return response;
};
