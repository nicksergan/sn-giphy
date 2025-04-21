import { Flex, Layout } from 'antd'
import { GifGallery } from './components/GifGallery.tsx';
import { PageContent, PageHeader } from './styled/global';

function App() {
  return (
    <Flex gap='middle' wrap>
      <Layout>
        <PageHeader>Try this awesome GIF search tool!</PageHeader>
        <PageContent>
          <GifGallery />
        </PageContent>
      </Layout>
    </Flex>

  )
}

export default App
