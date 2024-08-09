'use client';

import useInsuranceDialog from '@/hooks/dialogHooks/useInsuranceDialog';
import { Dialog, DialogBody } from '../ui/dialog';

export default function InsuranceDialog() {
    const insuranceDialog = useInsuranceDialog();
    function openModal() {
        insuranceDialog.onOpen();
    }
    function closeModal() {
        insuranceDialog.onClose();
    }

    return (
        <Dialog isOpen={insuranceDialog.isOpen} closeDialog={closeModal} openDialog={openModal} className='lg:max-w-lg' title='Trip Review'>
            <DialogBody>
                <main className='flex flex-col  p-2 md:p-6 md:pb-0 '>
                    <img src='/images/insurance_coverage.png' alt='Insurance' className='w-full h-auto' />
                </main>
            </DialogBody>
        </Dialog>
    );
}
