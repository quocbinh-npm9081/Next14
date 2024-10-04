import Link from 'next/link';
export default function Blog(){
    return(
        <>
            <h1>Blogs</h1>
            <ul>
                <li>
                    <Link href="blog/blog-1"> Blog 1</Link>
                </li>
                <li>
                    <Link href="blog/blog-2"> Blog 2</Link>
                </li>
            </ul>
        </>
    )
}