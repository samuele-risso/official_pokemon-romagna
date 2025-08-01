// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function GET(_, { params }) {
//   const { collectionName } = params;

//   const modelMap = {
//     Packs: prisma.packs,
//     RecentlyAdded: prisma.recentlyAdded,
//     // Aggiungi altre collezioni qui se necessario
//   };

//   const model = modelMap[collectionName];
//   if (!model) {
//     return NextResponse.json({ success: false, error: 'Collection not found' }, { status: 400 });
//   }

//   try {
//     const allItems = await model.findMany();
//     return NextResponse.json(allItems, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
