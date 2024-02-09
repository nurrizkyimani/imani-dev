import path from "path";
import * as fs from "fs";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemoteSerializeResult} from "next-mdx-remote";


export async function SerializeMdx(mdxPath: string) : Promise<MDXRemoteSerializeResult> {
    const fullPath = path.join(process.cwd(), mdxPath)
    const fullContent = fs.readFileSync(fullPath, 'utf8' )
    return serialize(fullContent)
}