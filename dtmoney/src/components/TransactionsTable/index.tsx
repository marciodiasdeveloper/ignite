import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
 
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolviemnto de Website</td>
            <td className="deposit">R$10.200</td>
            <td>Desenvolvimento</td>
            <td>15/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$2500,00</td>
            <td>Casa</td>
            <td>5/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}