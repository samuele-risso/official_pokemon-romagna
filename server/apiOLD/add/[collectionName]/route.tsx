// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// export async function POST(req, context) {
//   const params = await context.params;
//   const { collectionName } = params;

//   const body = await req.json();
//   const {
//     img = "",
//     productName,
//     productLanguage,
//     condition,
//     releaseDate,
//     description,
//   } = body;

//   const modelMap = {
//     Packs: prisma.packs,
//   };

//   const model = modelMap[collectionName];
//   if (!model) {
//     return NextResponse.json({ success: false, error: 'Collezione non valida' }, { status: 400 });
//   }

//   const newDoc = {
//     img,
//     productName,
//     productLanguage,
//     condition,
//     releaseDate: releaseDate ? new Date(releaseDate) : null,
//     description,
//   };

//   try {
//     const created = await model.create({ data: newDoc });
//     return NextResponse.json({ success: true, data: created }, { status: 201 });
//   } catch (error) {
//     console.error('Errore durante la creazione:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
