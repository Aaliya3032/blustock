'use client'
import { updateUserInfo } from '@/app/actions/account'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { toast } from 'sonner'

const ContactInfo = ({userInfo}) => {
	 const [infoState, setInfoState] = useState({
			"phone" : userInfo.phone,
		});

		const handleChange = (event) => {
			const field = event.target.name;
			const value = event.target.value;
			setInfoState({
				...infoState, [field]: value
			});
		}

		const handleUpdate = async (event) => {
			event.preventDefault();
			try {
				await updateUserInfo(userInfo?.email,infoState);
				toast.success("User contact details updated successfully");
			} catch (error) {
				toast.error(`Error: ${error.message}`);
			}
		}

  return (
    <div>
						<h5 className="text-lg font-semibold mb-4 text-primary">Contact Info :</h5>
						<form onSubmit={handleUpdate}>
							<div className="grid grid-cols-1 gap-5">
								<div>
									<Label className="mb-2 block text-tertiary">Phone No. :</Label>
									<Input
										name="phone"
										id="phone"
										type="number"
										value={infoState?.phone}
										placeholder="Phone :"
										onChange={handleChange}
									/>
								</div>
								{/* <div>
									<Label className="mb-2 block">Website :</Label>
									<Input
										name="url"
										id="url"
										type="url"
										placeholder="Url :"
									/>
								</div> */}
							</div>
							{/*end grid*/}
							<Button className="mt-5" type="submit">
								Add
							</Button>
						</form>
					</div>
  )
}

export default ContactInfo