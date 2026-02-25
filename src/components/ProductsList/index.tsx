import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          system="Windows"
          description="Descrição do jogo Ação"
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          system="Windows"
          description="Descrição do jogo Ação"
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          system="Windows"
          description="Descrição do jogo Ação"
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          system="Windows"
          description="Descrição do jogo Ação"
          infos={['-10%', 'R$ 150,00']}
          image="https://placehold.co/222x250"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
