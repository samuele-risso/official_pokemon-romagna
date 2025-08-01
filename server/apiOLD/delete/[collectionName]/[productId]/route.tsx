// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function DELETE(_, { params }) {
//   const { collectionName, productId } = params;

//   const modelMap = {
//     Packs: prisma.packs,
//     RecentlyAdded: prisma.recentlyAdded,
//   };

//   const model = modelMap[collectionName];
//   if (!model) {
//     return NextResponse.json({ success: false, error: 'Collection not found' }, { status: 400 });
//   }

//   try {
//     const deleted = await model.delete({
//       where: { id: Number(productId) },
//     });

//     return NextResponse.json({ success: true, data: deleted }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
