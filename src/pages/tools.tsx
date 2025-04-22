import PersonalCard from '../components/personalcard'

const Tools = () => {
  return (
    <>
    <div className='w-full xl:w-4/12 bg-red-300 p-2'>
      <div className='w-full flex flex-col gap-y-8 bg-red-400 xl:items-start items-center'>
        <div className='w-full flex justify-start bg-red-500'>
          <h1 className='max-w-3xl mx-auto bg-red-600'>Top Tier Tools For Exceptional Results</h1>
        </div>
        <div></div>
      </div>
    </div>
    <span className='block xl:hidden'>
    <PersonalCard/>
    </span>
    </>
  )
}

export default Tools