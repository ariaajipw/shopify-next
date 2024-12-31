export async function Navbar() {
    const menu = await getManu("nextjs-frontend-menu")
    return <nav></nav>;
}
