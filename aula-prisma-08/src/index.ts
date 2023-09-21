import prisma from "./database";

// SELECT COUNT(*), s."class" FROM students s
// WHERE s."jobId" is null
// GROUP BY s."class"
// ORDER BY COUNT(*) desc

(async () => {
  const students = await prisma.student.groupBy({
    by:["class"],
    _count:{id:true},
    orderBy:{_count:{id:"desc"}}
  })

  const students2 = await prisma.student.groupBy({
    by:["class"],
    _count:{id:true},
    orderBy:{_count:{id:"desc"}},
    where:{
      jobId:{equals: null}
    }
  })

  console.log(students);
  console.log(students2);
})()

