export const Section = ({
  title, 
  children
}: {
  title: string,
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <section className='pt-6'>
      <h2 className='text-3xl sm:text-4xl font-semibold pb-5'>{title}</h2>
      {children}
    </section>
  )
}
