// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function PUT(req, { params }) {
//   const { collectionName, productId } = params;
//   const body = await req.json();

//   const {
//     img,
//     productName,
//     productLanguage,
//     condition,
//     releaseDate,
//     description,
//   } = body;

//   const modelMap = {
//     Packs: prisma.packs,
//     RecentlyAdded: prisma.recentlyAdded,
//   };

//   const model = modelMap[collectionName];
//   if (!model) {
//     return NextResponse.json({ success: false, error: 'Collection not found' }, { status: 400 });
//   }

//   try {
//     const updated = await model.update({
//       where: { id: Number(productId) },
//       data: {
//         img,
//         name: productName,
//         language: productLanguage,
//         condition,
//         releaseDate: new Date(releaseDate),
//         description,
//       },
//     });

//     return NextResponse.json({ success: true, data: updated }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
