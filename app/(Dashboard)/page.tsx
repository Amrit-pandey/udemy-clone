import prisma from '@/lib/prismadb'

const DashboardPage = async() => {

    const course = await prisma.course.findMany({})
    return(
        <div>
           {course.map((item) => (
            <>
            <div>{item.title}</div>
            <div>{item.imageSrc}</div>
            </>
           ))}
        </div>
    )
}

export default DashboardPage