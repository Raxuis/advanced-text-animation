const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl" href={href}>{children}</a>
  )
}
const RevealLinks = () => {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="https://www.google.com">Google</FlipLink>
      <FlipLink href="https://www.twitter.com">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com">LinkedIn</FlipLink>
      <FlipLink href="https://www.youtube.com">YouTube</FlipLink>
    </section>
  )
}

export default RevealLinks