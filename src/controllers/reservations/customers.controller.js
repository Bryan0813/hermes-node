export class CustomersController {
  constructor ({ customersModel }) {
    this.customersModel = customersModel
  }

  get = async (req, res) => {
    const data = await this.customersModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    console.log('req.params.id', req.params.id)
    const data = await this.customersModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.customersModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.customersModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.customersModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
