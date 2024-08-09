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
        <Dialog
            isOpen={insuranceDialog.isOpen}
            closeDialog={closeModal}
            openDialog={openModal}
            className='lg:max-w-4xl'
            title='Insurance Coverage'>
            <DialogBody>
                <main className='flex flex-col '>
                    <img src='/images/insurance_coverage.png' alt='Insurance' className='w-full h-auto' />
                </main>
            </DialogBody>
        </Dialog>
    );
}
