import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Kalil',
      sobrenome: 'Santos',
      email: 'kalilzsantos@gmail.com',
      idade: 23,
      peso: 88.8,
      altura: 1.75,
    });
    res.json({
      aluno,
    });
  }
}

export default new HomeController(); // dessa forma minha classe já está instanciada
