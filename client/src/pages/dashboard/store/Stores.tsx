import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { getStoresByUserId } from "../../../components/widgets/stores/api/getStoresByUserId";
import useAuth from "../../../hooks/auth/useAuth";
import { Link } from "react-router-dom";
import Layout from "../../../components/layouts/Layout";
import { Heading } from "../../../components/ui/Heading";
import { StoreCard } from "../../../components/widgets/stores/StoreCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../../components/ui/Loading";
import { createStore } from "../../../components/widgets/stores/api/createStore";
import ModalForm from "../../../components/ui/ModalForm";
import toast from "react-hot-toast";
import NavbarDas from "../components/NavbarDas";

const inputs = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Name',
    type: 'text',
  },
  {
    label: 'Description',
    name: 'description',
    placeholder: 'description',
    type: 'textarea',
  },
  {
    label: 'Logo',
    name: 'logo',
    placeholder: 'Logo',
    type: 'file',
  },
  {
    label: 'Kawazaki',
    name: 'template',
    value: 'KAWAZAKI',
    type: 'radio',
  },
  {
    label: 'RayBan',
    name: 'template',
    value: 'RAYBAN',
    type: 'radio',
  }

]
export default function Stores() {
  const [isCreateStoreModalOpen, setIsCreateStoreModalOpen] = useState(false)
  const { auth } = useAuth()
  const [uploadedLogoSrc, setUploadedLogoSrc] = useState<string[]>([]);
  const { isLoading, data: storesData } = useQuery({ queryKey: ['STORES'], queryFn: () => getStoresByUserId(auth) })
  const { isPending, mutate } = useMutation({
    mutationFn: async (store: Record<string, any>) => {
      return createStore(store, auth)
    },
    onSettled(res) {

      if (res?.error || !res?.data) toast.error(res?.error as string)
      if (res?.data) {
        toast.success('Store created successfully')
        setIsCreateStoreModalOpen(false)
      }
    }
  })
  // console.log("this is :",storesData)
  return (
    <Layout>

      <div className="flex flex-col p-4  ">
        <ModalForm title="Create a store" open={isCreateStoreModalOpen} setOpen={setIsCreateStoreModalOpen} inputs={inputs} onSubmit={(data: Record<string, string>) => mutate({
          ...data,
          logo: uploadedLogoSrc[0]
        })} isLoading={isPending} setUploadedFilesSrc={setUploadedLogoSrc} />
        <Heading title="Manage your stores" subTitle={(<div className="flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          $120k &ndash; $140k
        </div>)} actions={[
          {
            label: 'New',
            type: 'NEW',
            onClick: () => setIsCreateStoreModalOpen(!isCreateStoreModalOpen),
          },
        ]} />
        <div className="w-full">
          {isLoading && <div className="w-full flex justify-center"><Loading /></div>}
          <ul className="divide-y divide-gray-100   m-5">
            {storesData ? storesData?.stores?.map((store) => (
              <Link to={`/dashboard/stores/${store._id as string}`} key={store._id as string}>
                <StoreCard id={store._id as string} description={store.description as string} name={store.name as string} logo={store.logo as string} />
              </Link>
            )) : null}
          </ul>
        </div>

      </div>
    </Layout>

  );
}

