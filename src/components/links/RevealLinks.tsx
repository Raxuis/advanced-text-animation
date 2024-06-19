import { motion } from 'framer-motion';

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      transition={{
        staggerChildren: 0.2
      }}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      href={href}>
      <div>{children.split("").map((letter, index) => {
        return (
          <motion.span
            variants={{
              initial: {
                y: 0
              },
              hovered: {
                y: "-100%"
              },
            }}
            key={index}
            className='inline-block'
          >
            {letter}
          </motion.span>)
      })}</div>
      <div
        className='absolute inset-0'>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%"
                },
                hovered: {
                  y: 0
                },
              }}
              key={index}
              className='inline-block'
            >
              {letter}
            </motion.span>)
        })}
      </div>
    </motion.a>
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