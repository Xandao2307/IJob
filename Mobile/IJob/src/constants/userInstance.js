class UserInstance {
    constructor(data) {
      if (UserInstance.instance) {
        return UserInstance.instance;
      }
  
      // Se não existir, cria uma nova instância com os dados fornecidos
      this.data = data // Se nenhum dado for fornecido, use um valor padrão
      UserInstance.instance = this
  
      return this
    }
  
    getData() {
      return this.data
    }
  }
  
  export default UserInstance