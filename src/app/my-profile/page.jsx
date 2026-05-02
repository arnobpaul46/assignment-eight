"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Gear } from "@gravity-ui/icons";
import { Avatar, Card, AvatarImage, AvatarFallback, Button, Modal } from "@heroui/react";
import { toast } from "react-toastify"; 

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (userData.isPending) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );
  }

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value; 
    const image = e.target.image.value; 

    try {
      await authClient.updateUser({
        name,
        image,
      });
      toast.success("Profile updated successfully!");
      window.location.reload(); 
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 relative overflow-hidden">
      
      <div className="absolute top-[10%] left-[-5%] w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-xl mx-auto relative z-10">
        <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <Avatar color="primary" className="w-24 h-24 cursor-pointer text-2xl font-bold">
                <AvatarImage src={user?.image} referrerPolicy="no-referrer" />
                <AvatarFallback className="text-6xl bg-gray-800 text-blue-400">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-3xl font-extrabold text-blue-500 mb-2">{user?.name}</h1>
            <p className="text-gray-400 text-lg mb-6 flex items-center gap-2">
              <i className="ri-mail-line text-blue-500 mt-1"></i> {user?.email}
            </p>
          </div>

          <div>
            <Modal>
              <Modal.Trigger className="group flex items-center mx-auto gap-3 rounded-2xl bg-gray-800 p-2 shadow-xs select-none hover:bg-blue-950 w-65">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-soft-foreground">
                  <Gear className="size-6 text-white" />
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <p className="text-xl text-white">Update Your Profile</p>
                </div>
              </Modal.Trigger>

              <Modal.Backdrop className="backdrop-blur-md bg-black/60">
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[420px] bg-[#0b1121] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                    <Modal.CloseTrigger className="text-white hover:text-red-400 transition-colors top-5 right-5 z-20" />
                    
                    
                    <form onSubmit={onSubmit}>
                      <Modal.Header className="bg-transparent border-b border-white/5 py-6 px-8 flex flex-row items-center gap-4 relative z-10">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-inner">
                          <i className="ri-user-settings-fill text-2xl"></i>
                        </div>
                        <div>
                          <Modal.Heading className="text-white font-bold text-2xl tracking-tight">Update Profile</Modal.Heading>
                          <p className="text-gray-500 text-xs">Edit your public information</p>
                        </div>
                      </Modal.Header>

                      <Modal.Body className="bg-transparent space-y-4 py-6 px-8">
                        <div className="space-y-2">
                          <label className="text-gray-400 text-[13px] ml-1 font-medium">Full Name</label>
                          <div className="relative group">
                            <i className="ri-user-3-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input
                              name="name" 
                              type="text"
                              
                              placeholder="Enter your name"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-gray-400 text-[13px] ml-1 font-medium">Profile Image URL</label>
                          <div className="relative group">
                            <i className="ri-image-circle-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input
                              name="image" 
                              type="text"
                            
                              placeholder="https://example.com/avatar.jpg"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                          </div>
                        </div>
                      </Modal.Body>

                      <Modal.Footer className=" border-t border-white/5 py-6 px-8 flex justify-end gap-3">
                        <Button slot="close" className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold">
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyProfile;