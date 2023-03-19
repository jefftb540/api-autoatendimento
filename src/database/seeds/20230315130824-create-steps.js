/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('steps', [{
      step: 'Conecte-se  rede sem fio wIFRN-Visitantes. Senha visitante@ifrn',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'No navegador do seu celular, acesse: https://www2.ifrn.edu.br/wifi, ou escaneie o QR Code',
      image: '/qr_ifrn_certificado.png',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Na página que se abre, escolha a opção "configuração manual"',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Faça o download do certificado rnp-ca.cer',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Na tela que surge toque em "Avançado".',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Em seguida em "Instalar Certificados"',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Em seguida selecione o arquivo "rnp-ca.cer" salvo na pasta Download.',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Digite um nome para o certificado (sugestão: ifrn) e clique em ok',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Esqueça a rede Certificado-Eduroam e conecte à rede eduroam',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'No campo Certificado CA escolha IFRN ou o nome escolhido por você.',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'o campo Domínio digite: ifrn.edu.br',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'No campo Identidade digite: matricula@ifrn.edu.br',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'No campo Senha digite sua senha do SUAP',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    {
      step: 'Clique em conectar',
      created_at: new Date(),
      updated_at: new Date(),
      tutorial_id: 4,
    },
    ], {});
  },

};
