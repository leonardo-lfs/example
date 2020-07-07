const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://sgvdmz.grupovila.com.br:5598/baseteste',
  timeout: 1000,
  headers: {
            'Content-Type': 'application/json',
            'Authorization': 'BASIC GV1948#145543',
            'tenantId': '01,01'
          }
});

async function consumirApi() {
  try {
    const dados = await instance({
      method: 'get',
      url: '/RESTCALCULADORAPLANO',
      data: {
        "tipo": 1,
        "nascimento": "1991-01-01",
        "dependentes": [
          {
            "parentesco": "FILHO",
            "nascimento": "1991-01-02"
          },
          {
            "parentesco": "FILHO",
            "nascimento": "1991-01-02"
          },
          {
            "parentesco": "FILHO",
            "nascimento": "1991-01-02"
          },
          {
            "parentesco": "FILHO",
            "nascimento": "1991-01-02"
          }
        ]
      }
    }); 
    console.log(dados.data)
  } catch(err) {
    console.log(err)
  }
}

consumirApi()
