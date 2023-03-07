import clientPromise from './mongodb';

const getUserDataUsage = async (email) => {
  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME | 'yobulk');
  // const userCollections = await db
  //   .collection('templates')
  //   .find({$and: [{ template_name: { $exists: false }}, {user: email}]})
  //   .toArray();
  // for (const collection of userCollections){
  //   const size = await db.collection(collection.collection_name).stats()
  //   totalSizeBytes += (isNaN(Number(size.size)) ? 0 : Number(size.size))
  // }
  // const totalSizeKbs = totalSizeBytes/1024;
  const usage = await db
    .collection('users')
    .findOne({email: email})
  if(!usage){
    return {memoryUsage: process.env.MEMORY_LIMIT || 25600, openApiHits: process.env.OPEN_API_LIMIT || 25}
  }
  return {memoryUsage: usage.memoryUsage, openApiHits: usage.openApiHits};
};

export default getUserDataUsage;
