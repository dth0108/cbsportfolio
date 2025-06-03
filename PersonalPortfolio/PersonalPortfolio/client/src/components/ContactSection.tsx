import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  language: z.enum(['korean', 'english']).optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      language: 'korean'
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('성공!', 'Success!'),
        description: t('메시지가 성공적으로 전송되었습니다.', 'Your message has been sent successfully.'),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('오류', 'Error'),
        description: t('메시지 전송에 실패했습니다. 다시 시도해주세요.', 'Failed to send message. Please try again.'),
        variant: 'destructive',
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="px-4 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#0c151d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {t('연락하기', 'Contact')}
        </h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#0c151d] text-base font-medium leading-normal pb-2">
                      {t('이름', 'Name')}
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        placeholder={t('성함을 입력해주세요', 'Your Name')}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-0 border border-[#cddcea] bg-slate-50 focus:border-[#cddcea] h-14 placeholder:text-[#4574a1] p-[15px] text-base font-normal leading-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#0c151d] text-base font-medium leading-normal pb-2">
                      {t('이메일', 'Email')}
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        placeholder={t('이메일을 입력해주세요', 'Your Email')}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-0 border border-[#cddcea] bg-slate-50 focus:border-[#cddcea] h-14 placeholder:text-[#4574a1] p-[15px] text-base font-normal leading-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#0c151d] text-base font-medium leading-normal pb-2">
                      {t('메시지', 'Message')}
                    </FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        placeholder={t('문의사항을 입력해주세요', 'Your Message')}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-0 border border-[#cddcea] bg-slate-50 focus:border-[#cddcea] min-h-36 placeholder:text-[#4574a1] p-[15px] text-base font-normal leading-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex px-4 py-3 justify-start">
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#359dff] text-[#0c151d] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2a8ae6] transition-colors disabled:opacity-50"
              >
                {contactMutation.isPending 
                  ? t('전송 중...', 'Sending...') 
                  : t('메시지 보내기', 'Send Message')
                }
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
