import Article from '@/components/article';
import Header from '@/components/header';
import SocialMedias from '@/components/socialmedias';

const AllPosts = () => {
  return (
    <>
      <Header />
      <Article className="margin-top-20vh" title="Exemplo de título de Post" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati nisi praesentium. Velit, animi! " theme="CSS" date="12/11/23"/>
      <Article title="título" text="artigo sobre css" theme="CSS" date="12/11/23"/>
      <Article title="título" text="artigo sobre css" theme="CSS" date="12/11/23"/>
      <SocialMedias />
    </>
  );
};

export default AllPosts;