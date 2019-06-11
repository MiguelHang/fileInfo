const FileInfoService = {
  
    getInfo: (params) =>{

        return fetch('https://planos.azurewebsites.net/index.php/api/blueprint/'+ params)
                    .then(function(response) {
                        return response.json();
                })
    }
};
  
  export default FileInfoService