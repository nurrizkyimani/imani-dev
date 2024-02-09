// src/pages/index.tsx
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SerializeMdx } from '../lib/serializemdx';
import RootLayout from '../app/layout';

interface IndexProps {
    mdxSource: MDXRemoteSerializeResult;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const mdxSource = await SerializeMdx('src/content/introduction.mdx');
    return { props: { mdxSource } };
};

export default function Index({ mdxSource }: IndexProps) {
    return (
        <RootLayout>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <MDXRemote {...mdxSource} />
            </div>
        </RootLayout>
    );
}
