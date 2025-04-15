// import { useState, useEffect } from "react";
// import GetMenu, { CreateMenu, UpdateMenu, DeleteMenu } from "../Hooks/LoadAllMenu";

// const CheckMenu = () => {
//   const { loading, adminMenu } = GetMenu();
//   const [editedMenu, setEditedMenu] = useState([]);
//   const [deletedMenu, setDeletedMenu] = useState([]);
//   const [viewingVarieties, setViewingVarieties] = useState(null);
//   const [editingItem, setEditingItem] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [availableSizes, setAvailableSizes] = useState(['S', 'M', 'L']);
//   const [newMenu, setNewMenu] = useState({
//     name: "",
//     category: "",
//     imageUrl: "",
//     available: false,
//     dietaryInfo: {
//       vegan: false,
//       vegetarian: false,
//       glutenFree: false,
//       halal: false,
//       kosher: false
//     },
//     menuVariety: {
//       name: "",
//       available: false,
//       imageUrl: "",
//       sizes: {
//         size: "",
//         currency: "₹",
//         price: 0
//       }
//     },
//     ingredients: {
//       milk: "",
//       espresso: "",
//       foam: ""
//     },
//     ratings: {
//       rating: 0,
//       review: "",
//       userId: ""
//     },
//     averageRating: 0
//   });
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [deleteMode, setDeleteMode] = useState(false);
//   const [selectedForDelete, setSelectedForDelete] = useState([]);

//   const handleSizeChange = (e) => {
//     const size = e.target.value;
//     setSelectedSize(size);
//     if (size && !availableSizes.includes(size)) {
//       setIsModalOpen(true);
//     }
//   };

//   useEffect(() => {
//     if (adminMenu) {
//       setEditedMenu(adminMenu.map((item) => ({ ...item })));
//     }
//   }, [adminMenu]);

//   const handleViewingClick = (index, id) => {
//     setViewingVarieties({ ...editedMenu[index], index });
//   };

//   const handleEditClick = (varietyid, viewingVarietiesid) => {
//     const em = editedMenu.find(e => e._id === viewingVarietiesid);
//     const editedItem = em.menuVariety.find(e => e._id === varietyid);
//     setEditingItem({ editedItem, em });
//   };

//   const handleInputChange = (field, value) => {
//     setEditingItem((prev) => {
//       const updated = { ...prev };

//       // Ensure 'em' and 'editedItem' exist
//       updated.em = updated.em ?? {};
//       updated.editedItem = updated.editedItem ?? {};

//       if (field.startsWith("menuVariety.")) {
//         const key = field.split(".")[1];
//         updated.editedItem = { ...updated.editedItem, [key]: value };

//         if (updated.em.menuVariety) {
//           const index = updated.em.menuVariety.findIndex(v => v._id === updated.editedItem._id);
//           if (index !== -1) {
//             const updatedVarieties = [...updated.em.menuVariety];
//             updatedVarieties[index] = {
//               ...updatedVarieties[index],
//               [key]: value,
//             };
//             updated.em.menuVariety = updatedVarieties;
//           }
//         }
//       } else if (field === "dietaryInfo") {
//         updated.em = { ...updated.em, dietaryInfo: value };
//       } else {
//         updated.em = { ...updated.em, [field]: value };
//       }

//       return updated;
//     });
//   };

//   const handleSave = async () => {
//     const updatedData = await UpdateMenu(editingItem.em);
//     if (updatedData) {
//       setEditedMenu((prevMenu) =>
//         prevMenu.map((item) =>
//           item._id === editingItem.em._id ? updatedData : item
//         )
//       );
//       setEditingItem(null);
//     }
//   };

//   const closeViewModal = () => setViewingVarieties(null);

//   const handleDeleteVariety = async (varietyId, menuId) => {
//     const menuItem = editedMenu.find(item => item._id === menuId);
//     const updatedMenuItem = {
//       ...menuItem,
//       menuVariety: menuItem.menuVariety.filter(v => v._id !== varietyId),
//     };
//     const updatedData = await UpdateMenu(updatedMenuItem);
//     if (updatedData) {
//       setEditedMenu(prev => prev.map(item => item._id === updatedData._id ? updatedData : item));
//       setViewingVarieties(prev => ({ ...updatedData, index: prev.index }));
//     }
//   };

//   // const handleAddMenu = async () => {
//   //   const menuData = {
//   //     name: newMenu.name,
//   //     category: newMenu.category,
//   //     imageUrl: newMenu.imageUrl,
//   //     available: newMenu.available,
//   //     dietaryInfo: newMenu.dietaryInfo,
//   //     ingredients: newMenu.ingredients,
//   //     menuVariety: []
//   //   };

//   //   const created = await CreateMenu(menuData);
//   //   if (created) {
//   //     setEditedMenu(prev => [...prev, created]);
//   //     setNewMenu({
//   //       // name: "",
//   //       // category: "",
//   //       // imageUrl: "",
//   //       // available: false,
//   //       // dietaryInfo: {
//   //       //   vegan: false,
//   //       //   vegetarian: false,
//   //       //   glutenFree: false,
//   //       //   halal: false,
//   //       //   kosher: false
//   //       // },
//   //       // ingredients: {
//   //       //   milk: false,
//   //       //   espresso: false,
//   //       //   foam: false
//   //       // }

//   //       name: "",
//   //       category: "",
//   //       imageUrl: "",
//   //       available: false,
//   //       dietaryInfo: {
//   //         vegan: false,
//   //         vegetarian: false,
//   //         glutenFree: false,
//   //         halal: false,
//   //         kosher: false
//   //       },
//   //       menuVariety: {
//   //         name: "",
//   //         available: false,
//   //         imageUrl: "",
//   //         sizes: {
//   //           size: "",
//   //           currency: "",
//   //           price: 0
//   //         }
//   //       },
//   //       ingredients: {
//   //         milk: "",
//   //         espresso: "",
//   //         foam: ""
//   //       },
//   //       ratings: {
//   //         rating: 0,
//   //         review: "",
//   //         userId: ""
//   //       }
//   //     });
//   //     setShowAddModal(false);
//   //   }
//   // };

//   // const handleAddMenu = async () => {
//   //   const menuData = {
//   //     name: newMenu.name,
//   //     category: newMenu.category,
//   //     imageUrl: newMenu.imageUrl,
//   //     available: newMenu.available,
//   //     dietaryInfo: newMenu.dietaryInfo,
//   //     ingredients: Object.keys(newMenu.ingredients)
//   //       .filter(key => newMenu.ingredients[key] !== "")
//   //       .map(key => key.charAt(0).toUpperCase() + key.slice(1)),
//   //     menuVariety: newMenu.menuVariety.name ? [{
//   //       name: newMenu.menuVariety.name,
//   //       available: newMenu.menuVariety.available,
//   //       imageUrl: newMenu.menuVariety.imageUrl,
//   //       sizes: newMenu.menuVariety.sizes.size ? [{
//   //         size: newMenu.menuVariety.sizes.size,
//   //         currency: newMenu.menuVariety.sizes.currency || "₹",
//   //         price: newMenu.menuVariety.sizes.price || 0
//   //       }] : []
//   //     }] : [],
//   //     ratings: newMenu.ratings.userId ? [{
//   //       rating: newMenu.ratings.rating,
//   //       review: newMenu.ratings.review,
//   //       userId: newMenu.ratings.userId
//   //     }] : [],
//   //     averageRating: newMenu.ratings.rating || 0
//   //   };

//   //   try {
//   //     const created = await CreateMenu(menuData);
//   //     if (created) {
//   //       setEditedMenu(prev => [...prev, created]);

//   //       setNewMenu({
//   //         name: "",
//   //         category: "",
//   //         imageUrl: "",
//   //         available: false,
//   //         dietaryInfo: {
//   //           vegan: false,
//   //           vegetarian: false,
//   //           glutenFree: false,
//   //           halal: false,
//   //           kosher: false
//   //         },
//   //         menuVariety: {
//   //           name: "",
//   //           available: false,
//   //           imageUrl: "",
//   //           sizes: {
//   //             size: "",
//   //             currency: "₹",
//   //             price: 0
//   //           }
//   //         },
//   //         ingredients: {
//   //           milk: "",
//   //           espresso: "",
//   //           foam: ""
//   //         },
//   //         ratings: {
//   //           rating: 0,
//   //           review: "",
//   //           userId: ""
//   //         }
//   //       });

//   //       setShowAddModal(false);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error creating menu:", error);
//   //   }
//   // };


//   const [currentVariety, setCurrentVariety] = useState({
//     name: "",
//     imageUrl: "",
//     available: true,
//     sizes: [
//       { size: "S", currency: "₹", price: 0 },
//       { size: "M", currency: "₹", price: 0 },
//       { size: "L", currency: "₹", price: 0 }
//     ]
//   });


//   const addVariety = () => {
//     if (!currentVariety.name) return;

//     setNewMenu(prev => ({
//       ...prev,
//       menuVariety: [...prev.menuVariety, currentVariety]
//     }));

//     setCurrentVariety({
//       name: "",
//       imageUrl: "",
//       available: true,
//       sizes: [
//         { size: "S", currency: "₹", price: 0 },
//         { size: "M", currency: "₹", price: 0 },
//         { size: "L", currency: "₹", price: 0 }
//       ]
//     });
//   };

//   const handleAddMenu = async () => {
//     // Validate required fields
//     if (!newMenu.name || !newMenu.category) {
//       alert("Please fill in at least Name and Category fields");
//       return;
//     }

//     // Prepare ingredients array from the object
//     const ingredientsArray = Object.entries(newMenu.ingredients)
//       .filter(([_, value]) => value !== "")
//       .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));

//     // Prepare the menu data
//     const menuData = {
//       name: newMenu.name.trim(),
//       category: newMenu.category.trim(),
//       imageUrl: newMenu.imageUrl.trim(),
//       available: Boolean(newMenu.available),
//       dietaryInfo: {
//         vegan: Boolean(newMenu.dietaryInfo.vegan),
//         vegetarian: Boolean(newMenu.dietaryInfo.vegetarian),
//         glutenFree: Boolean(newMenu.dietaryInfo.glutenFree),
//         halal: Boolean(newMenu.dietaryInfo.halal),
//         kosher: Boolean(newMenu.dietaryInfo.kosher)
//       },
//       ingredients: ingredientsArray,
//       menuVariety: newMenu.menuVariety.name ? [{
//         name: newMenu.menuVariety.name.trim(),
//         available: Boolean(newMenu.menuVariety.available),
//         imageUrl: newMenu.menuVariety.imageUrl.trim(),
//         sizes: newMenu.menuVariety.sizes.size ? [{
//           size: newMenu.menuVariety.sizes.size,
//           currency: newMenu.menuVariety.sizes.currency || "₹",
//           price: Number(newMenu.menuVariety.sizes.price) || 0
//         }] : []
//       }] : [],
//       ratings: [],
//       averageRating: 0
//     };

//     console.log("Sending to server:", menuData);

//     try {
//       const created = await CreateMenu(menuData);
//       console.log("Created : ", created)

//       if (!created) {
//         throw new Error("No data returned from server");
//       }

//       if (created.error) {
//         throw new Error(created.error);
//       }

//       setEditedMenu(prev => [...prev, created]);

//       // Reset form
//       setNewMenu({
//         name: "",
//         category: "",
//         imageUrl: "",
//         available: false,
//         dietaryInfo: {
//           vegan: false,
//           vegetarian: false,
//           glutenFree: false,
//           halal: false,
//           kosher: false
//         },
//         menuVariety: {
//           name: "",
//           available: false,
//           imageUrl: "",
//           sizes: {
//             size: "",
//             currency: "₹",
//             price: 0
//           }
//         },
//         ingredients: {
//           milk: "",
//           espresso: "",
//           foam: ""
//         },
//         ratings: {
//           rating: 0,
//           review: "",
//           userId: ""
//         }
//       });

//       setShowAddModal(false);
//       alert("Menu item created successfully!");

//     } catch (error) {
//       console.error("Error creating menu:", error);
//       alert(`Failed to create menu: ${error.message || "Server error"}`);
//     }
//   };

//   const handleDeleteMenu = async (menuId) => {
//     const success = await DeleteMenu(menuId);
//     if (success) {
//       setEditedMenu(prev => prev.filter(item => item._id !== menuId));
//     }
//   };

//   const toggleDeleteMode = () => {
//     setDeleteMode(prev => !prev);
//     setSelectedForDelete([]);
//   };

//   const handleSelectForDelete = (id) => {
//     setSelectedForDelete(prev =>
//       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
//     );
//   };

//   const handleDeleteSelected = async () => {
//     for (let id of selectedForDelete) {
//       await handleDeleteMenu(id);
//     }
//     setDeleteMode(false);
//   };

//   return (
//     <div className="p-10 bg-yellow-50 rounded-lg" refresh="true">
//       <div className="flex justify-between items-center">
//         <h2 className="text-3xl text-center font-semibold text-yellow-800 mb-6">Menu Management</h2>
//         <div className="flex gap-4">
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="px-6 py-2 bg-green-600 font-semibold rounded-lg text-white"
//           >
//             Add
//           </button>
//           <button
//             onClick={toggleDeleteMode}
//             className="px-6 py-2 bg-red-600 font-semibold rounded-lg text-white"
//           >
//             {deleteMode ? "Cancel Delete" : "Delete"}
//           </button>
//           {deleteMode && selectedForDelete.length > 0 && (
//             <button
//               onClick={handleDeleteSelected}
//               className="px-6 py-2 bg-red-600 font-semibold rounded-lg text-white"
//             >
//               Confirm Delete ({selectedForDelete.length})
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="grid w-[55rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {loading ? (
//           <p className="text-gray-500">Loading...</p>
//         ) : adminMenu && adminMenu.length > 0 ? (
//           adminMenu.map((menu, index) => (
//             <div key={index} className="relative border border-yellow-400 h-72 p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition">
//               {deleteMode && (
//                 <input
//                   type="checkbox"
//                   className="absolute top-2 left-2 h-5 w-5"
//                   checked={selectedForDelete.includes(menu._id)}
//                   onChange={() => handleSelectForDelete(menu._id)}
//                 />
//               )}
//               <img src={menu.imageUrl || "placeholder.jpg"} alt={menu.name} className="h-40 w-full object-cover rounded-lg" />
//               <h3 className="text-lg font-bold text-yellow-900 mt-3">{menu.name}</h3>
//               <button
//                 className="mt-2 bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
//                 onClick={() => handleViewingClick(index, menu._id)}
//               >
//                 See Varieties
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No menu items available.</p>
//         )}
//       </div>

//       {/* Menu Varieties Modal */}
//       {viewingVarieties && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl w-2/4">
//             <h2 className="text-2xl font-semibold text-yellow-900 mb-4">{viewingVarieties.name} Varieties</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {viewingVarieties?.menuVariety?.map((variety, index) => (
//                 <div key={index} className="border border-yellow-400 p-4 rounded-lg shadow-md bg-yellow-100 hover:shadow-lg transition">
//                   <img src={variety.imageUrl || "placeholder.jpg"} alt="Menu Varieties" className="h-30 rounded-lg" />
//                   <h3 className="text-lg font-bold text-yellow-900">{variety.name}</h3>
//                   <button
//                     className="mt-2 w-full bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
//                     onClick={() => handleEditClick(variety._id, viewingVarieties._id)}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//               onClick={closeViewModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingItem && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl h-[35rem] w-full max-w-4xl">
//             <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Edit {editingItem.em.name}</h2>

//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-yellow-900 mb-1">Name</label>
//                   <input
//                     type="text"
//                     value={editingItem.em.name || ''}
//                     onChange={(e) => handleInputChange("name", e.target.value)}
//                     className="p-2 border border-yellow-400 rounded-lg w-full"
//                   />
//                 </div>
//                 {editingItem?.editedItem && (
//                   <div>
//                     <label>Menu Variety Name</label>
//                     <input
//                       type="text"
//                       value={editingItem?.editedItem?.name || ''}
//                       onChange={(e) => handleInputChange("menuVariety.name", e.target.value)}
//                       className="p-2 border border-yellow-400 rounded-lg w-full"
//                     />
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-sm font-medium text-yellow-900 mb-1">Category</label>
//                   <input
//                     type="text"
//                     value={editingItem.em.category || ''}
//                     onChange={(e) => handleInputChange("category", e.target.value)}
//                     className="p-2 border border-yellow-400 rounded-lg w-full"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-yellow-900 mb-1">Image URL</label>
//                 <input
//                   type="text"
//                   value={editingItem.em.imageUrl || ''}
//                   onChange={(e) => handleInputChange("imageUrl", e.target.value)}
//                   className="p-2 border border-yellow-400 rounded-lg w-full"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-yellow-900 mb-1">Availability</label>
//                   <select
//                     value={editingItem.em.available ? "Yes" : "No"}
//                     onChange={(e) => handleInputChange("available", e.target.value === "Yes")}
//                     className="p-2 border border-yellow-400 rounded-lg w-full"
//                   >
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-yellow-900 mb-1">Item Size</label>
//                   <select
//                     value={selectedSize}
//                     onChange={handleSizeChange}
//                     className="p-2 border border-yellow-400 rounded-lg w-full"
//                   >
//                     <option value="">Select Size</option>
//                     {availableSizes.map((size) => (
//                       <option key={size} value={size}>{size}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-yellow-900 mb-1">Dietary Information</label>
//                 <div className="grid grid-cols-5 gap-2">
//                   {Object.keys(editingItem.em.dietaryInfo || {}).map((key) => (
//                     <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
//                       <input
//                         type="checkbox"
//                         checked={editingItem.em.dietaryInfo[key] || false}
//                         onChange={(e) =>
//                           handleInputChange("dietaryInfo", {
//                             ...editingItem.em.dietaryInfo,
//                             [key]: e.target.checked,
//                           })
//                         }
//                         className="h-4 w-4"
//                       />
//                       <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-yellow-900 mb-1">Ingredients</label>
//                 <div className="grid grid-cols-5 gap-2">
//                   {Object.keys(editingItem.em.ingredients || {}).map((key) => (
//                     <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
//                       <input
//                         type="checkbox"
//                         checked={editingItem.em.ingredients[key] || false}
//                         onChange={(e) =>
//                           handleInputChange("ingredients", {
//                             ...editingItem.em.ingredients,
//                             [key]: e.target.checked,
//                           })
//                         }
//                         className="h-4 w-4"
//                       />
//                       <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setEditingItem(null)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add Menu Modal */}
//       {showAddModal && (
//         // <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//         //   <div className="bg-white p-6 rounded-lg shadow-xl h-[35rem] w-full max-w-4xl">
//         //     <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Add New Menu Item</h2>

//         //     <div className="space-y-4">
//         //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         //         <div>
//         //           <label className="block text-sm font-medium text-yellow-900 mb-1">Name</label>
//         //           <input
//         //             type="text"
//         //             value={newMenu.name}
//         //             onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
//         //             className="p-2 border border-yellow-400 rounded-lg w-full"
//         //           />
//         //         </div>
//         //         <div>
//         //           <label className="block text-sm font-medium text-yellow-900 mb-1">Category</label>
//         //           <input
//         //             type="text"
//         //             value={newMenu.category}
//         //             onChange={(e) => setNewMenu({ ...newMenu, category: e.target.value })}
//         //             className="p-2 border border-yellow-400 rounded-lg w-full"
//         //           />
//         //         </div>
//         //       </div>

//         //       <div>
//         //         <label className="block text-sm font-medium text-yellow-900 mb-1">Image URL</label>
//         //         <input
//         //           type="text"
//         //           value={newMenu.imageUrl}
//         //           onChange={(e) => setNewMenu({ ...newMenu, imageUrl: e.target.value })}
//         //           className="p-2 border border-yellow-400 rounded-lg w-full"
//         //         />
//         //       </div>

//         //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         //         <div>
//         //           <label className="block text-sm font-medium text-yellow-900 mb-1">Availability</label>
//         //           <select
//         //             value={newMenu.available ? "Yes" : "No"}
//         //             onChange={(e) => setNewMenu({ ...newMenu, available: e.target.value === "Yes" })}
//         //             className="p-2 border border-yellow-400 rounded-lg w-full"
//         //           >
//         //             <option value="Yes">Yes</option>
//         //             <option value="No">No</option>
//         //           </select>
//         //         </div>
//         //         <div>
//         //           <label className="block text-sm font-medium text-yellow-900 mb-1">Item Size</label>
//         //           <select
//         //             value={selectedSize}
//         //             onChange={handleSizeChange}
//         //             className="p-2 border border-yellow-400 rounded-lg w-full"
//         //           >
//         //             <option value="">Select Size</option>
//         //             {availableSizes.map((size) => (
//         //               <option key={size} value={size}>{size}</option>
//         //             ))}
//         //           </select>
//         //         </div>
//         //       </div>

//         //       <div>
//         //         <label className="block text-sm font-medium text-yellow-900 mb-1">Dietary Information</label>
//         //         <div className="grid grid-cols-5 gap-2">
//         //           {Object.keys(newMenu.dietaryInfo).map((key) => (
//         //             <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
//         //               <input
//         //                 type="checkbox"
//         //                 checked={newMenu.dietaryInfo[key]}
//         //                 onChange={(e) => {
//         //                   setNewMenu({
//         //                     ...newMenu,
//         //                     dietaryInfo: {
//         //                       ...newMenu.dietaryInfo,
//         //                       [key]: e.target.checked
//         //                     }
//         //                   });
//         //                 }}
//         //                 className="h-4 w-4"
//         //               />
//         //               <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//         //             </label>
//         //           ))}
//         //         </div>
//         //       </div>

//         //       <div>
//         //         <label className="block text-sm font-medium text-yellow-900 mb-1">Ingredients</label>
//         //         <div className="grid grid-cols-5 gap-2">
//         //           {Object.keys(newMenu.ingredients).map((key) => (
//         //             <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
//         //               <input
//         //                 type="checkbox"
//         //                 checked={newMenu.ingredients[key]}
//         //                 onChange={(e) => {
//         //                   setNewMenu({
//         //                     ...newMenu,
//         //                     ingredients: {
//         //                       ...newMenu.ingredients,
//         //                       [key]: e.target.checked
//         //                     }
//         //                   });
//         //                 }}
//         //                 className="h-4 w-4"
//         //               />
//         //               <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//         //             </label>
//         //           ))}
//         //         </div>
//         //       </div>
//         //     </div>

//         //     <div className="mt-6 flex justify-end gap-3">
//         //       <button
//         //         onClick={() => setShowAddModal(false)}
//         //         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//         //       >
//         //         Cancel
//         //       </button>
//         //       <button
//         //         onClick={handleAddMenu}
//         //         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
//         //       >
//         //         Add Menu Item
//         //       </button>
//         //     </div>
//         //   </div>
//         // </div>


// <div className="min-h-screen bg-gray-50 p-6">
//   {/* Modern Card Layout */}
//   <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//     <div className="p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Menu Item</h2>

//       {/* Main Menu Form */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
//           <input
//             type="text"
//             value={newMenu.name}
//             onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//             placeholder="Item name"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
//           <input
//             type="text"
//             value={newMenu.category}
//             onChange={(e) => setNewMenu({ ...newMenu, category: e.target.value })}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//             placeholder="Beverages, Food, etc."
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//           <input
//             type="text"
//             value={newMenu.imageUrl}
//             onChange={(e) => setNewMenu({ ...newMenu, imageUrl: e.target.value })}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//             placeholder="https://example.com/image.jpg"
//           />
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={newMenu.available}
//             onChange={(e) => setNewMenu({ ...newMenu, available: e.target.checked })}
//             className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
//           />
//           <label className="ml-2 block text-sm text-gray-700">Available</label>
//         </div>
//       </div>

//       {/* Menu Varieties Section */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4 flex justify-between items-center">
//           Menu Varieties
//           <button
//             onClick={addVariety}
//             className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition flex items-center"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//             </svg>
//             Add Variety
//           </button>
//         </h3>

//         {/* Current Variety Form */}
//         <div className="bg-gray-50 p-4 rounded-lg mb-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Variety Name*</label>
//               <input
//                 type="text"
//                 value={currentVariety.name}
//                 onChange={(e) => setCurrentVariety({ ...currentVariety, name: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 placeholder="e.g., Almond Latte"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//               <input
//                 type="text"
//                 value={currentVariety.imageUrl}
//                 onChange={(e) => setCurrentVariety({ ...currentVariety, imageUrl: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 placeholder="https://example.com/variety.jpg"
//               />
//             </div>
//           </div>

//           <h4 className="text-md font-medium text-gray-700 mb-2">Pricing</h4>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {currentVariety.sizes.map((size, index) => (
//               <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
//                 <h5 className="font-medium text-gray-700 mb-2">Size: {size.size}</h5>
//                 <div className="space-y-2">
//                   <div>
//                     <label className="block text-xs text-gray-500 mb-1">Price</label>
//                     <input
//                       type="number"
//                       value={size.price}
//                       onChange={(e) => handleSizeChange(index, 'price', e.target.value)}
//                       className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Added Varieties List */}
//         {newMenu.menuVariety.length > 0 && (
//           <div className="mt-4">
//             <h4 className="text-sm font-medium text-gray-700 mb-2">Added Varieties</h4>
//             <div className="space-y-2">
//               {newMenu.menuVariety.map((variety, index) => (
//                 <div key={index} className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg border border-yellow-100">
//                   <div>
//                     <span className="font-medium">{variety.name}</span>
//                     <span className="text-sm text-gray-500 ml-2">
//                       ({variety.sizes.map(s => `${s.size}: ₹${s.price}`).join(', ')})
//                     </span>
//                   </div>
//                   <button className="text-red-500 hover:text-red-700">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Dietary Information */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Dietary Information</h3>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//           {Object.entries(newMenu.dietaryInfo).map(([key, value]) => (
//             <label key={key} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
//               <input
//                 type="checkbox"
//                 checked={value}
//                 onChange={(e) => setNewMenu({
//                   ...newMenu,
//                   dietaryInfo: { ...newMenu.dietaryInfo, [key]: e.target.checked }
//                 })}
//                 className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
//               />
//               <span className="text-sm text-gray-700 capitalize">{key}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Ingredients */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {Object.entries(newMenu.ingredients).map(([key, value]) => (
//             <div key={key}>
//               <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{key}</label>
//               <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => setNewMenu({
//                   ...newMenu,
//                   ingredients: { ...newMenu.ingredients, [key]: e.target.value }
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 placeholder={`${key} amount`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
//         <button
//           onClick={() => setShowAddModal(false)}
//           className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleAddMenu}
//           className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition flex items-center"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//             <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
//           </svg>
//           Save Menu Item
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//       )}
//     </div>
//   );
// };

// export default CheckMenu;



import { useState, useEffect } from "react";
import GetMenu, { CreateMenu, UpdateMenu, DeleteMenu } from "../Hooks/LoadAllMenu";

const CheckMenu = () => {
  const { loading, adminMenu } = GetMenu();
  const [editedMenu, setEditedMenu] = useState([]);
  const [deletedMenu, setDeletedMenu] = useState([]);
  const [viewingVarieties, setViewingVarieties] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableSizes, setAvailableSizes] = useState(['S', 'M', 'L']);
  const [newMenu, setNewMenu] = useState({
    name: "",
    category: "",
    imageUrl: "",
    available: false,
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      halal: false,
      kosher: false
    },
    menuVariety: {
      name: "",
      available: false,
      imageUrl: "",
      sizes: {
        size: "",
        currency: "₹",
        price: 0
      }
    },
    ingredients: {
      milk: "",
      espresso: "",
      foam: ""
    },
    ratings: {
      rating: 0,
      review: "",
      userId: ""
    },
    averageRating: 0
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState([]);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
    if (size && !availableSizes.includes(size)) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (adminMenu) {
      setEditedMenu(adminMenu.map((item) => ({ ...item })));
    }
  }, [adminMenu]);

  const handleViewingClick = (index, id) => {
    setViewingVarieties({ ...editedMenu[index], index });
  };

  const handleEditClick = (varietyid, viewingVarietiesid) => {
    const em = editedMenu.find(e => e._id === viewingVarietiesid);
    const editedItem = em.menuVariety.find(e => e._id === varietyid);
    setEditingItem({ editedItem, em });
  };

  const handleInputChange = (field, value) => {
    setEditingItem((prev) => {
      const updated = { ...prev };

      // Ensure 'em' and 'editedItem' exist
      updated.em = updated.em ?? {};
      updated.editedItem = updated.editedItem ?? {};

      if (field.startsWith("menuVariety.")) {
        const key = field.split(".")[1];
        updated.editedItem = { ...updated.editedItem, [key]: value };

        if (updated.em.menuVariety) {
          const index = updated.em.menuVariety.findIndex(v => v._id === updated.editedItem._id);
          if (index !== -1) {
            const updatedVarieties = [...updated.em.menuVariety];
            updatedVarieties[index] = {
              ...updatedVarieties[index],
              [key]: value,
            };
            updated.em.menuVariety = updatedVarieties;
          }
        }
      } else if (field === "dietaryInfo") {
        updated.em = { ...updated.em, dietaryInfo: value };
      } else {
        updated.em = { ...updated.em, [field]: value };
      }

      return updated;
    });
  };

  const handleSave = async () => {
    const updatedData = await UpdateMenu(editingItem.em);
    if (updatedData) {
      setEditedMenu((prevMenu) =>
        prevMenu.map((item) =>
          item._id === editingItem.em._id ? updatedData : item
        )
      );
      setEditingItem(null);
    }
  };

  const closeViewModal = () => setViewingVarieties(null);

  const handleDeleteVariety = async (varietyId, menuId) => {
    const menuItem = editedMenu.find(item => item._id === menuId);
    const updatedMenuItem = {
      ...menuItem,
      menuVariety: menuItem.menuVariety.filter(v => v._id !== varietyId),
    };
    const updatedData = await UpdateMenu(updatedMenuItem);
    if (updatedData) {
      setEditedMenu(prev => prev.map(item => item._id === updatedData._id ? updatedData : item));
      setViewingVarieties(prev => ({ ...updatedData, index: prev.index }));
    }
  };


  const [currentVariety, setCurrentVariety] = useState({
    name: "",
    imageUrl: "",
    available: true,
    sizes: [
      { size: "S", currency: "₹", price: 0 },
      { size: "M", currency: "₹", price: 0 },
      { size: "L", currency: "₹", price: 0 }
    ]
  });

  const addVariety = () => {
    if (!currentVariety.name) return;

    setNewMenu(prev => ({
      ...prev,
      menuVarieties: [...prev.menuVariety, currentVariety]
    }));

    setCurrentVariety({
      name: "",
      imageUrl: "",
      available: true,
      sizes: [
        { size: "S", currency: "₹", price: 0 },
        { size: "M", currency: "₹", price: 0 },
        { size: "L", currency: "₹", price: 0 }
      ]
    });
  };

  const handleAddMenu = async () => {
    if (!newMenu.name || !newMenu.category) {
      alert("Please fill in at least Name and Category fields");
      return;
    }

    // Prepare ingredients array from the object
    const ingredientsArray = Object.entries(newMenu.ingredients)
      .filter(([_, value]) => value !== "")
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));

    // Prepare the menu data
    const menuData = {
      name: newMenu.name.trim(),
      category: newMenu.category.trim(),
      imageUrl: newMenu.imageUrl.trim(),
      available: Boolean(newMenu.available),
      dietaryInfo: {
        vegan: Boolean(newMenu.dietaryInfo.vegan),
        vegetarian: Boolean(newMenu.dietaryInfo.vegetarian),
        glutenFree: Boolean(newMenu.dietaryInfo.glutenFree),
        halal: Boolean(newMenu.dietaryInfo.halal),
        kosher: Boolean(newMenu.dietaryInfo.kosher)
      },
      ingredients: ingredientsArray,
      menuVariety: newMenu.menuVariety.name ? [{
        name: newMenu.menuVariety.name.trim(),
        available: Boolean(newMenu.menuVariety.available),
        imageUrl: newMenu.menuVariety.imageUrl.trim(),
        sizes: newMenu.menuVariety.sizes.size ? [{
          size: newMenu.menuVariety.sizes.size,
          currency: newMenu.menuVariety.sizes.currency || "₹",
          price: Number(newMenu.menuVariety.sizes.price) || 0
        }] : []
      }] : [],
      ratings: [],
      averageRating: 0
    };

    console.log("Sending to server:", menuData);

    try {
      const created = await CreateMenu(menuData);
      console.log("Created : ", created)

      if (!created) {
        throw new Error("No data returned from server");
      }

      if (created.error) {
        throw new Error(created.error);
      }

      setEditedMenu(prev => [...prev, created]);

      // Reset form
      setNewMenu({
        name: "",
        category: "",
        imageUrl: "",
        available: false,
        dietaryInfo: {
          vegan: false,
          vegetarian: false,
          glutenFree: false,
          halal: false,
          kosher: false
        },
        menuVariety: {
          name: "",
          available: false,
          imageUrl: "",
          sizes: {
            size: "",
            currency: "₹",
            price: 0
          }
        },
        ingredients: {
          milk: "",
          espresso: "",
          foam: ""
        },
        ratings: {
          rating: 0,
          review: "",
          userId: ""
        }
      });

      setShowAddModal(false);
      alert("Menu item created successfully!");

    } catch (error) {
      console.error("Error creating menu:", error);
      alert(`Failed to create menu: ${error.message || "Server error"}`);
    }
  };

  const handleDeleteMenu = async (menuId) => {
    const success = await DeleteMenu(menuId);
    if (success) {
      setEditedMenu(prev => prev.filter(item => item._id !== menuId));
    }
  };

  const toggleDeleteMode = () => {
    setDeleteMode(prev => !prev);
    setSelectedForDelete([]);
  };

  const handleSelectForDelete = (id) => {
    setSelectedForDelete(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = async () => {
    for (let id of selectedForDelete) {
      await handleDeleteMenu(id);
    }
    setDeleteMode(false);
  };

  return (
    <div className="p-10 bg-yellow-50 rounded-lg" refresh="true">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-center font-semibold text-yellow-800 mb-6">Menu Management</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2 bg-green-600 font-semibold rounded-lg text-white"
          >
            Add
          </button>
          <button
            onClick={toggleDeleteMode}
            className="px-6 py-2 bg-red-600 font-semibold rounded-lg text-white"
          >
            {deleteMode ? "Cancel Delete" : "Delete"}
          </button>
          {deleteMode && selectedForDelete.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="px-6 py-2 bg-red-600 font-semibold rounded-lg text-white"
            >
              Confirm Delete ({selectedForDelete.length})
            </button>
          )}
        </div>
      </div>

      <div className="grid w-[55rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : adminMenu && adminMenu.length > 0 ? (
          adminMenu.map((menu, index) => (
            <div key={index} className="relative border border-yellow-400 h-72 p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition">
              {deleteMode && (
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 h-5 w-5"
                  checked={selectedForDelete.includes(menu._id)}
                  onChange={() => handleSelectForDelete(menu._id)}
                />
              )}
              <img src={menu.imageUrl || "placeholder.jpg"} alt={menu.name} className="h-40 w-full object-cover rounded-lg" />
              <h3 className="text-lg font-bold text-yellow-900 mt-3">{menu.name}</h3>
              <button
                className="mt-2 bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                onClick={() => handleViewingClick(index, menu._id)}
              >
                See Varieties
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No menu items available.</p>
        )}
      </div>

      {/* Menu Varieties Modal */}
      {viewingVarieties && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-2/4">
            <h2 className="text-2xl font-semibold text-yellow-900 mb-4">{viewingVarieties.name} Varieties</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {viewingVarieties?.menuVariety?.map((variety, index) => (
                <div key={index} className="border border-yellow-400 p-4 rounded-lg shadow-md bg-yellow-100 hover:shadow-lg transition">
                  <img src={variety.imageUrl || "placeholder.jpg"} alt="Menu Varieties" className="h-30 rounded-lg" />
                  <h3 className="text-lg font-bold text-yellow-900">{variety.name}</h3>
                  <button
                    className="mt-2 w-full bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    onClick={() => handleEditClick(variety._id, viewingVarieties._id)}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
            <button
              className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={closeViewModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl h-[35rem] w-full max-w-4xl">
            <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Edit {editingItem.em.name}</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Name</label>
                  <input
                    type="text"
                    value={editingItem.em.name || ''}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="p-2 border border-yellow-400 rounded-lg w-full"
                  />
                </div>
                {editingItem?.editedItem && (
                  <div>
                    <label>Menu Variety Name</label>
                    <input
                      type="text"
                      value={editingItem?.editedItem?.name || ''}
                      onChange={(e) => handleInputChange("menuVariety.name", e.target.value)}
                      className="p-2 border border-yellow-400 rounded-lg w-full"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Category</label>
                  <input
                    type="text"
                    value={editingItem.em.category || ''}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="p-2 border border-yellow-400 rounded-lg w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-900 mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingItem.em.imageUrl || ''}
                  onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                  className="p-2 border border-yellow-400 rounded-lg w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Availability</label>
                  <select
                    value={editingItem.em.available ? "Yes" : "No"}
                    onChange={(e) => handleInputChange("available", e.target.value === "Yes")}
                    className="p-2 border border-yellow-400 rounded-lg w-full"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Item Size</label>
                  <select
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="p-2 border border-yellow-400 rounded-lg w-full"
                  >
                    <option value="">Select Size</option>
                    {availableSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-900 mb-1">Dietary Information</label>
                <div className="grid grid-cols-5 gap-2">
                  {Object.keys(editingItem.em.dietaryInfo || {}).map((key) => (
                    <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
                      <input
                        type="checkbox"
                        checked={editingItem.em.dietaryInfo[key] || false}
                        onChange={(e) =>
                          handleInputChange("dietaryInfo", {
                            ...editingItem.em.dietaryInfo,
                            [key]: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-900 mb-1">Ingredients</label>
                <div className="grid grid-cols-5 gap-2">
                  {Object.keys(editingItem.em.ingredients || {}).map((key) => (
                    <label key={key} className="flex items-center gap-2 p-2 rounded-lg text-yellow-900 border border-yellow-400">
                      <input
                        type="checkbox"
                        checked={editingItem.em.ingredients[key] || false}
                        onChange={(e) =>
                          handleInputChange("ingredients", {
                            ...editingItem.em.ingredients,
                            [key]: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setEditingItem(null)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Menu Modal - Updated to be non-scrollable */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          {/* Modern Card Layout */}
          {/* <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"> */}
          <div className="bg-white overflow-auto p-6 rounded-lg shadow-xl h-[35rem] w-full max-w-6xl">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-900 mb-6">Add New Menu Item</h2>

              {/* Main Menu Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Name</label>
                  <input
                    type="text"
                    value={newMenu.name}
                    onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Item name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Category</label>
                  <input
                    type="text"
                    value={newMenu.category}
                    onChange={(e) => setNewMenu({ ...newMenu, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Beverages, Food, etc."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-yellow-900 mb-1">Image URL</label>
                  <input
                    type="text"
                    value={newMenu.imageUrl}
                    onChange={(e) => setNewMenu({ ...newMenu, imageUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newMenu.available}
                    onChange={(e) => setNewMenu({ ...newMenu, available: e.target.checked })}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm font-medium text-yellow-900">Available</label>
                </div>
              </div>

              {/* Menu Varieties Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex justify-between items-center">
                  Menu Varieties
                  <button
                    onClick={addVariety}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Variety
                  </button>
                </h3>

                {/* Current Variety Form */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-900 mb-1">Variety Name*</label>
                      <input
                        type="text"
                        value={currentVariety.name}
                        onChange={(e) => setCurrentVariety({ ...currentVariety, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="e.g., Almond Latte"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-yellow-900 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={currentVariety.imageUrl}
                        onChange={(e) => setCurrentVariety({ ...currentVariety, imageUrl: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="https://example.com/variety.jpg"
                      />
                    </div>
                  </div>

                  <h4 className="text-md font-medium text-yellow-900 mb-2">Pricing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentVariety.sizes.map((size, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-yellow-900 mb-2">Size: {size.size}</h5>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Price</label>
                            <input
                              type="number"
                              //value={size.price}
                              //value={e.target.value}
                              onChange={(e) => handleSizeChange(index, 'price', e.target.value)}
                              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Added Varieties List */}
                {newMenu.menuVariety.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-yellow-900 mb-2">Added Varieties</h4>
                    <div className="space-y-2">
                      {newMenu.menuVariety.map((variety, index) => (
                        <div key={index} className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                          <div>
                            <span className="font-medium">{variety.name}</span>
                            <span className="text-sm text-gray-500 ml-2">
                              ({variety.sizes.map(s => `${s.size}: ₹${s.price}`).join(', ')})
                            </span>
                          </div>
                          <button className="text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dietary Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Dietary Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {Object.entries(newMenu.dietaryInfo).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setNewMenu({
                          ...newMenu,
                          dietaryInfo: { ...newMenu.dietaryInfo, [key]: e.target.checked }
                        })}
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-yellow-900 capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Ingredients</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(newMenu.ingredients).map(([key, value]) => (
                    <div key={key}>
                      <label key={key} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNewMenu({
                            ...newMenu,
                            ingredients: { ...newMenu.ingredients, [key]: e.target.checked }
                          })}
                          className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-yellow-900 capitalize">{key}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMenu}
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                  </svg>
                  Save Menu Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckMenu;